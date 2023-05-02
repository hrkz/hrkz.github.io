import React from 'react'

import renderMathInElement from 'katex/dist/contrib/auto-render';
import 'katex/dist/katex.min.css';

export default function Notes() {
  const ref = React.useRef(null);

  React.useEffect(() => {
    if (ref.current) {
      renderMathInElement(ref.current, {
        delimiters: [
          { left: '$$', right: '$$', display: true },
          { left: '\\[', right: '\\]', display: true },
          { left: '$', right: '$', display: false },
          { left: '\\(', right: '\\)', display: false },
        ],
      });
    }
  }, [ref.current]);

  return (
    <section>
      <article ref={ref}>
        <i className="info">Example article from </i><a href="https://book.sciml.ai/notes">SciML notes</a>.<hr />
        <h2>Adjoint of Linear Solve</h2>
        <p>
        Let's say we have the function {`$A(p)x = b(p)$`}, i.e. this is the function that is given by the linear solving process, and we want to 
        calculate the gradients of a cost function {`$g(x, p)$`}. To evaluate the gradient directly, we'd calculate:
        </p>
        {`$$\\frac{dg}{dp} = g_{p} + g_{x}x_{p}$$`}
        <p>
        where {`$x_{p}$`} is the derivative of each value of {`$x$`} with respect to each parameter {`$p$`}, and thus it's an {`$M \\times P$`} 
        matrix (a Jacobian). Since {`$g$`} is a small cost function, {`$g_{p}$`} and {`$g_{x}$`} are easy to compute, but {`$x_{p}$`} is given by:
        meaning the next equation has no integer solutions for {`$n>2$`}:
        </p>
        {`$$\\lambda^{T} = g_{x}A^{-1}$$`}
        <p>
        then we obtain
        </p>
        {`$$\\frac{dg}{dp}|_{f=0} = g_{p} - \\lambda^{T}f_{p} = g_{p} - \\lambda^{T}(A_{p}x - b_{p})$$`}
        <p>
        which is an alternative formulation of the derivative at the solution value. However, in this case there is no computational benefit to this 
        reformulation.
        </p>
        <h2>Adjoint of Nonlinear Solve</h2>
        <p>
        Now let's look at some {`$f(x, p) = 0$`} nonlinear solving. Differentiating by {`$p$`} gives us:
        </p>
        {`$$f_{x}x_{p} + f_{p} = 0$$`}
        <p>
        and thus {`$x_{p} = -f_{x}^{-1}f_{p}$`}. Therefore, using our cost function we write:
        </p>
        {`$$\\frac{dg}{dp} = g_{p} + g_{x}x_{p} = g_{p} - g_{x}(f_{x}^{-1}f_{p}$$`}
        <p>
        or
        </p>
        {`$$\\frac{dg}{dp} = g_{p} - (g_{x}f_{x}^{-1})f_{p}$$`}
        <p>
        Since {`$g_{x}$`} is {`$1 \\times M$`}, {`$f_{x}^{-1}$`} is {`$M \\times M$`}, and {`$f_{p}$`} is {`$M \\times P$`}, this grouping changes 
        the problem gets rid of the size {`$MP$`} term.
        </p>
        <p>
        As is normal with backpasses, we solve for {`$x$`} through the forward pass however we like, and then for the backpass solve for
        </p>
        {`$$f_{x}^{T} \\lambda = g_{x}^{T}$$`}
        <p>
        to obtain
        </p>
        {`$$\\frac{dg}{dp}|_{f=0} = g_{p} - \\lambda^{T}f_{p}$$`}
        <p>
        which does the calculation without ever building the size {`$M \\times MP$`} term.
        </p>
        <h2>Adjoint of Ordinary Differential Equations</h2>
        <p>
        We with to solve for some cost function {`$G(u, p)$`} evaluated throughout the differential equation, i.e:
        </p>
        {`$$G(u, p) = G(u(p)) = \\int_{t_{0}}^{T} g(u(t, p)) dt$$`}
        <p>
        To derive this adjoint, introduce the Lagrange multiplier {`$\\lambda$`} to form:
        </p>
        {`$$I(p) = G(p) - \\int_{t_{0}}^{T} \\lambda^{*}(u^{\\prime} - f(u, p, t)) dt$$`}
        <p>
        Since {`$u^{\\prime} = f(u, p, t)$`}, this is the mathematician's trick of adding zero, so then we have that
        </p>
        {`$$\\frac{dG}{dp} = \\frac{dI}{dp} = \\int_{t_{0}}^{T} (g_{p} + g_{u}s) dt - \\int_{t_{0}}^{T} \\lambda^{*}(s^{\\prime} - f_{u}s - f_{p}) dt$$`}
        <p>
        for {`$s$`} being the sensitivity, {`$s = \\frac{du}{dp}$`}. Now, let's require that
        </p>
        {`$$\\lambda^{\\prime} = -\\frac{df^{*}}{du} \\lambda + \\left( \\frac{dg}{du} \\right)^{*}$$`}
        {`$$\\lambda(T) = 0$$`}
        <p>
        This means that the boundary term of the integration by parts is zero, and also one of those integral terms are perfectly zero. Thus, if 
        {`$\\lambda$`} satisfies that equation, then we get:
        </p>
        {`$$\\frac{dG}{dp} = \\lambda^{*}(t_{0})\\frac{dG}{du}(t_{0}) + \\int_{t_{0}}^{T} (g_{p} + \\lambda^{*}f_{p}) dt$$`}
        <p>
        which gives us our adjoint derivative relation. If {`$G$`} is discrete, then it can be represented via the Dirac delta:
        </p>
        {`$$G(u, p) = \\int_{t_{0}}^{T} \\sum_{i=1}^{N} ||d_{i} - u(t_{i}, p)||^{2} \\delta(t_{i} - t) dt$$`}
        <p>
        at the data points {`$(t_{i}, d_{i})$`}. Therefore, the derivative of an ODE solution with respect to a cost function is given by solving for 
        {`$\\lambda^{*}$`} using an ODE for {`$\\lambda^{T}$`} in reverse time, and then using that to calculate {`$\\frac{dG}{dp}$`}. Note that this 
        can be calculated simultaneously by appending a single value to the reverse ODE, since we can simply define the new ODE term as {`$g_{p} + \\lambda^{*}f_{p}$`}, 
        which would then calculate the integral on the fly (ODE integration is just... integration!).
        </p>
        <h2>Complexities of Implementing ODE Adjoints</h2>
        ...
      </article>
    </section>
  )
}
