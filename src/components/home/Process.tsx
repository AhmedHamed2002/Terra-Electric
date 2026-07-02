export default function Process() {
  const steps = [
    {
      number: "01",
      title: "Consultation",
      description: "Define requirements and budget.",
      active: false,
    },
    {
      number: "02",
      title: "Sourcing",
      description: "Search and filter top grade vehicles.",
      active: true,
    },
    {
      number: "03",
      title: "Inspection",
      description: "Video report sent for approval.",
      active: false,
    },
    {
      number: "04",
      title: "Logistics",
      description: "Vehicle assigned to your destination.",
      active: false,
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-gray-50/10 w-full">
      <div className="container-fluid md:px-10 px-2 mx-auto text-center">
        <p className="text-[#0688c4ec] font-medium mb-3 uppercase tracking-wider text-sm">
          The Sourcing Workflow
        </p>
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold font-serif text-[#0d1b2a] mb-6">
          We Inspect. You Approve. Then You Pay.
        </h2>
        <p className="text-gray-600 max-w-3xl mx-auto mb-16 text-sm md:text-base">
          We never ask you to send money to strangers in China. Our team inspects every vehicle in person and sends you photos and video before you pay anything.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 px-3 gap-5 md:gap-4 max-w-7xl mx-auto">
          {steps.map((step, index) => (
            <div
              key={index}
              className={`p-8 group hover:bg-[#176a88]! hover:text-white! flex flex-col items-center justify-center transition-all duration-300 ${
                step.active
                  ? "bg-[#0d1b2a] text-white shadow-xl scale-105 z-10 rounded-md "
                  : "bg-white text-gray-800 border border-gray-200 rounded-md md:border-y md:border-r md:first:border-l"
              }`}
            >
              <span
                className={`text-4xl font-bold mb-4 ${
                  step.active ? "text-[#0ea5e9]" : "text-gray-300"
                }`}
              >
                {step.number}
              </span>
              <h4
                className={`text-sm font-bold group-hover:text-white! uppercase tracking-widest mb-3 ${
                  step.active ? "text-white" : "text-[#0d1b2a]"
                }`}
              >
                {step.title}
              </h4>
              <p
                className={`text-sm text-center group-hover:text-gray-300! ${
                  step.active ? "text-gray-300" : "text-gray-500"
                }`}
              >
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
