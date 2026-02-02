import glassStyles from './Glass.module.css';

export default function Glass({
  children,
  className = '',
  contentClassName = '',
  fillAvailable = false,
}: {
  children: React.ReactNode;
  className?: string;
  contentClassName?: string;
  fillAvailable?: boolean;
}) {
  const outerClass = `${glassStyles.glass} ${fillAvailable ? glassStyles.fillAvailable : ''} ${className}`;
  return (
    <div className={outerClass}>
      <div className={`${glassStyles.glassContent} ${contentClassName}`}>{children}</div>
    </div>
  );
}
