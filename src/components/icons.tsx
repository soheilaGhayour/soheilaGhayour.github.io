type IconProps = { size?: number }

export function GitHubIcon({ size = 22 }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M12 0.3a12 12 0 0 0-3.8 23.4c0.6 0.1 0.8-0.26 0.8-0.58l-0.01-2.04c-3.34 0.73-4.04-1.61-4.04-1.61-0.55-1.39-1.34-1.76-1.34-1.76-1.08-0.74 0.09-0.73 0.09-0.73 1.2 0.09 1.83 1.24 1.83 1.24 1.07 1.83 2.8 1.3 3.49 1 0.1-0.78 0.42-1.31 0.76-1.61-2.66-0.3-5.47-1.33-5.47-5.93 0-1.31 0.47-2.38 1.24-3.22-0.13-0.3-0.54-1.52 0.12-3.18 0 0 1-0.32 3.3 1.23a11.5 11.5 0 0 1 6 0c2.28-1.55 3.29-1.23 3.29-1.23 0.66 1.66 0.25 2.88 0.12 3.18 0.77 0.84 1.23 1.91 1.23 3.22 0 4.61-2.8 5.63-5.48 5.92 0.43 0.37 0.81 1.1 0.81 2.22l-0.01 3.29c0 0.32 0.21 0.69 0.82 0.57A12 12 0 0 0 12 0.3z" />
    </svg>
  )
}

export function LinkedInIcon({ size = 22 }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M20.45 20.45h-3.55v-5.57c0-1.33-0.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.36V9h3.41v1.56h0.05a3.74 3.74 0 0 1 3.37-1.85c3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C0.79 0 0 0.77 0 1.73v20.54C0 23.22 0.79 24 1.77 24h20.45c0.98 0 1.78-0.78 1.78-1.73V1.73C24 0.77 23.2 0 22.22 0z" />
    </svg>
  )
}

export function MailIcon({ size = 22 }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      aria-hidden="true"
    >
      <rect x="2.5" y="4.5" width="19" height="15" rx="2.5" />
      <path d="m3.5 6.5 8.5 6.5 8.5-6.5" />
    </svg>
  )
}
