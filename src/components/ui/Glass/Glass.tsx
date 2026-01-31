import glassStyles from './Glass.module.css';

export default function Glass({
  children,
  className = '',
  contentClassName = '',
}: {
  children: React.ReactNode;
  className?: string;
  contentClassName?: string;
}) {
  return (
    <div className={`${glassStyles.glass} ${className}`}>
      <div className={`${glassStyles.glassContent} ${contentClassName}`}>{children}</div>
    </div>
  );
}
