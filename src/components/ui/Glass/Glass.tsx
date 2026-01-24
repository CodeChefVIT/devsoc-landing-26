import glassStyles from './Glass.module.css';

export default function Glass({
  children,
  className = '',
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`${glassStyles.glass} ${className}`}>
      <div className={glassStyles.glassContent}>{children}</div>
    </div>
  );
}
