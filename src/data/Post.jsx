import React from 'react'

import katex from 'katex'
import 'katex/dist/katex.min.css'

function Schema(props) {
  const title = props.title;
  const date = props.date;

  return (
    <div>
      <h3>{title}</h3>
      <h4 className="info"><i>{date}</i></h4>
      <hr />
      {props.children}
    </div>
  )
}

function Section(props) {
  const name = props.name;

  return (
    <>
      <h2>{name}</h2>
      {props.children}
    </>
  )
}

function Math({children, display = false}) {
  const ref = React.useRef();

  React.useEffect(() => {
    if (ref.current) {
      katex.render(
        children, 
        ref.current, { 
          throwOnError: false, 
          displayMode: display 
        });
    }
  }, [ref.current]);

  return (
    <span ref={ref}></span>
  )
}

import { 
  FloatingPortal,
  useFloating,
  useClick,
  useDismiss,
  useRole,
  useInteractions, 
  offset 
} from '@floating-ui/react';

function Popover(props) {
  const [isOpen, setIsOpen] = React.useState(false);

  const {refs, floatingStyles, context} = useFloating({
    open: isOpen,
    onOpenChange: setIsOpen,
    middleware: [offset(10)],
  });

  const click = useClick(context);
  const dismiss = useDismiss(context);
  const role = useRole(context);

  const {getReferenceProps, getFloatingProps} = useInteractions([
    click,
    dismiss,
    role,
  ]);

  return (
    <>
      <a ref={refs.setReference} {...getReferenceProps()}>
        {props.children}
      </a>
      {isOpen && (
        <FloatingPortal context={context} modal={false}>
          <div
            ref={refs.setFloating}
            style={floatingStyles}
            {...getFloatingProps()}
          >
            Popover example
          </div>
        </FloatingPortal>
      )}
    </>
  )
}

export default function Post() {
  return (
    <article>
      <Schema title={<>Example article from the <a href="https://book.sciml.ai/notes">SciML notes</a></>} date="May 4th, 2023">
        <Section name="Adjoint of Linear Solve">
        <p>
          Let's say we have the function <Math>{`A(p)x = b(p)`}</Math>, i.e. this is the function that is given by the linear solving process, and we want to
          calculate the gradients of a cost function <Math>{`g(x, p)`}</Math>. To evaluate the gradient directly, we'd calculate:
          <Math display={true}>{`\\frac{dg}{dp} = g_{p} + g_{x}x_{p}`}</Math>
          where <Math>{`x_{p}`}</Math> is the derivative of each value of <Math>{`x`}</Math> with respect to each parameter <Math>{`p`}</Math>, 
          and thus it's an <Math>{`M \\times P`}</Math>
          matrix (a Jacobian). Since <Math>{`g`}</Math> is a small cost function, <Math>{`g_{p}`}</Math> and <Math>{`g_{x}`}</Math> are easy to compute, 
          but <Math>{`x_{p}`}</Math> is given by:
          <Math display={true}>{`x_{p_{i}} = A^{-1}(b_{p_{i}} - A_{p_{i}}x)`}</Math>
          and so this is <Math>{`P M \\times M`}</Math> linear solves, which is expensive! However, if we multiply by
          <Math display={true}>{`\\lambda^{T} = g_{x}A^{-1}`}</Math>
          then we obtain
          <Math display={true}>{`\\frac{dg}{dp}|_{f=0} = g_{p} - \\lambda^{T}f_{p} = g_{p} - \\lambda^{T}(A_{p}x - b_{p})`}</Math>
          which is an alternative formulation of the derivative at the solution value. 
          However, in this case there is no computational benefit to this <Popover content={'bonjour'}>reformulation</Popover>.
        </p>
        </Section>
        <Section name="Adjoint of Nonlinear Solve">
        <p>
          Now let's look at some <Math>{`f(x, p) = 0`}</Math> nonlinear solving. Differentiating by <Math>{`p`}</Math> gives us:
          <Math display={true}>{`f_{x}x_{p} + f_{p} = 0`}</Math>
          and thus <Math>{`x_{p} = -f_{x}^{-1}f_{p}`}</Math>. Therefore, using our cost function we write:
          <Math display={true}>{`\\frac{dg}{dp} = g_{p} + g_{x}x_{p} = g_{p} - g_{x}(f_{x}^{-1}f_{p})`}</Math>
          or
          <Math display={true}>{`\\frac{dg}{dp} = g_{p} - (g_{x}f_{x}^{-1})f_{p}`}</Math>
          Since <Math>{`g_{x}`}</Math> is <Math>{`1 \\times M`}</Math>, <Math>{`f_{x}^{-1}`}</Math> is <Math>{`M \\times M`}</Math>, and <Math>{`f_{p}`}</Math> is <Math>{`M \\times P`}</Math>, this grouping changes
          the problem gets rid of the size <Math>{`MP`}</Math> term.
        </p>
        <p>
          As is normal with backpasses, we solve for <Math>{`x`}</Math> through the forward pass however we like, and then for the backpass solve for
          <Math display={true}>{`f_{x}^{T} \\lambda = g_{x}^{T}`}</Math>
          to obtain
          <Math display={true}>{`\\frac{dg}{dp}|_{f=0} = g_{p} - \\lambda^{T}f_{p}`}</Math>
          which does the calculation without ever building the size <Math>{`M \\times MP`}</Math> term.
        </p>
        </Section>
        <Section name="Adjoint of Ordinary Differential Equations">
        <p>
          We with to solve for some cost function <Math>{`G(u, p)`}</Math> evaluated throughout the differential equation, i.e:
          <Math display={true}>{`G(u, p) = G(u(p)) = \\int_{t_{0}}^{T} g(u(t, p)) dt`}</Math>
          To derive this adjoint, introduce the Lagrange multiplier <Math>{`\\lambda`}</Math> to form:
          <Math display={true}>{`I(p) = G(p) - \\int_{t_{0}}^{T} \\lambda^{*}(u^{\\prime} - f(u, p, t)) dt`}</Math>
          Since <Math>{`u^{\\prime} = f(u, p, t)`}</Math>, this is the mathematician's trick of adding zero, so then we have that
          <Math display={true}>{`\\frac{dG}{dp} = \\frac{dI}{dp} = \\int_{t_{0}}^{T} (g_{p} + g_{u}s) dt - \\int_{t_{0}}^{T} \\lambda^{*}(s^{\\prime} - f_{u}s - f_{p}) dt`}</Math>
          for <Math>{`s`}</Math> being the sensitivity, <Math>{`s = \\frac{du}{dp}`}</Math>. Now, let's require that
          <Math display={true}>{`\\lambda^{\\prime} = -\\frac{df^{*}}{du} \\lambda + \\left( \\frac{dg}{du} \\right)^{*}`}</Math>
          <Math display={true}>{`\\lambda(T) = 0`}</Math>
          This means that the boundary term of the integration by parts is zero, and also one of those integral terms are perfectly zero. Thus, if
          <Math>{`\\lambda`}</Math> satisfies that equation, then we get:
          <Math display={true}>{`\\frac{dG}{dp} = \\lambda^{*}(t_{0})\\frac{dG}{du}(t_{0}) + \\int_{t_{0}}^{T} (g_{p} + \\lambda^{*}f_{p}) dt`}</Math>
          which gives us our adjoint derivative relation. If <Math>{`G`}</Math> is discrete, then it can be represented via the Dirac delta:
          <Math display={true}>{`G(u, p) = \\int_{t_{0}}^{T} \\sum_{i=1}^{N} ||d_{i} - u(t_{i}, p)||^{2} \\delta(t_{i} - t) dt`}</Math>
          at the data points <Math>{`(t_{i}, d_{i})`}</Math>. Therefore, the derivative of an ODE solution with respect to a cost function is given by solving for
          <Math>{`\\lambda^{*}`}</Math> using an ODE for <Math>{`\\lambda^{T}`}</Math> in reverse time, and then using that to calculate <Math>{`\\frac{dG}{dp}`}</Math>. Note that this
          can be calculated simultaneously by appending a single value to the reverse ODE, since we can simply define the new ODE term as <Math>{`g_{p} + \\lambda^{*}f_{p}`}</Math>,
          which would then calculate the integral on the fly (ODE integration is just... integration!).
        </p>
        </Section>
        <Section name="Complexities of Implementing ODE Adjoints"><p>...</p></Section>
      </Schema>
    </article>
  )
}