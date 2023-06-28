export default function Container({
    children, 
    className, 
    ...rest}) {
    return (
      <div
        {...rest}
        className={`mx-6 ${className}`}
        >
        {children}
      </div>
    )
  }