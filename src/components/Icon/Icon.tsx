'use client';

import styles from './Icon.module.scss';
import clsx from 'clsx';

type IconProps = {
  name: string;
  label?: string;
  size?: number;
  fill?: boolean;
  weight?: number;
  grade?: number;
  className?: string;
};

export default function Icon({
  name,
  label,
  size = 24,
  fill = false,
  weight = 400,
  grade = 0,
  className,
}: IconProps) {
  return (
    <span
      className={clsx('material-symbols-outlined', styles.icon, className)}
      style={{
        fontVariationSettings: `
          'FILL' ${fill ? 1 : 0},
          'wght' ${weight},
          'GRAD' ${grade},
          'opsz' ${size}
        `,
        fontSize: size,
      }}
      aria-hidden={label ? undefined : true}
      aria-label={label}
      role={label ? 'img' : undefined}
    >
      {name}
    </span>
  );
}
