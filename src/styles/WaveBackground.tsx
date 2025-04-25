const WaveBackground = () => (
  <svg
    viewBox="0 0 500 500"
    xmlns="http://www.w3.org/2000/svg"
    className="absolute bottom-0 left-0 w-full h-full opacity-10 pointer-events-none"
    preserveAspectRatio="none"
  >
    <path
      d="M0,100 C150,200 350,0 500,100 L500,500 L0,500 Z"
      fill="none"
      stroke="red"
      strokeWidth="1"
    />
    <path
      d="M0,200 C150,300 350,100 500,200"
      fill="none"
      stroke="red"
      strokeWidth="1"
    />
    <path
      d="M0,300 C150,400 350,200 500,300"
      fill="none"
      stroke="red"
      strokeWidth="1"
    />
    <path
      d="M0,400 C150,500 350,300 500,400"
      fill="none"
      stroke="red"
      strokeWidth="1"
    />
  </svg>
)

export { WaveBackground }
