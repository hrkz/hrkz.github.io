import React from 'react'

import katex from 'katex'
import 'katex/dist/katex.min.css'

import { 
  FloatingPortal,
  FloatingArrow,
  useFloating,
  useClick,
  useDismiss,
  useRole,
  useInteractions, 
  offset,
  arrow
} from '@floating-ui/react'

export default function Post() {
  function Math({ display = false, children }) {
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

  function Ref({ element, children }) {
    const [isOpen, setIsOpen] = React.useState(false);
    const arrowRef = React.useRef();

    const {refs, floatingStyles, context} = useFloating({
      placement: 'top',
      open: isOpen,
      onOpenChange: setIsOpen,
      middleware: [offset(10), arrow({ element: arrowRef })],
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
        <span ref={refs.setReference} {...getReferenceProps()}>{element}</span>
        {isOpen && (
          <FloatingPortal context={context} modal={false}>
            <div
              ref={refs.setFloating}
              style={floatingStyles}
              className='popover'
              {...getFloatingProps()}
            >
              {children}
              <FloatingArrow ref={arrowRef} context={context} d='M 14,14 7,7 0,14' className='arrow' />
            </div>
          </FloatingPortal>
        )}
      </>
    )
  }

  function PostSection({ id, name, children }) {
    return (
      <>
        <h2 id={id}>{name}</h2>
        {children}
      </>
    )
  }

  function PostEntry({ title, date, children }) {
    return (
      <>
        <h3>{title}</h3>
        <h4 className="date">{date}</h4>
        <hr />
        {children}
      </>
    )
  }

  return (
    <article>
      <PostEntry 
        title={<>The purpose of symbolic maths</>} 
        date='Dec 25, 2023'
      >
        <PostSection 
          id='intro' 
          name='Introduction'
        >
        <p>
          I want to discuss the ability to generate language-independent code <Math>{`f(\\mathcal{G})`}</Math>, in particular for scientific 
          applications. <Ref element={<button>[Sources]</button>}>@reference</Ref>.
        </p>
        </PostSection>
      </PostEntry>
    </article>
  )
}