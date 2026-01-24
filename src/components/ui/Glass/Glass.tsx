import glassStyles from './Glass.module.css';

export default function Glass({ children }: { children: React.ReactNode }) {
  return (
    <div className={glassStyles.glass}>
      <div className={glassStyles.glassContent}>{children}</div>
    </div>
  );
}
