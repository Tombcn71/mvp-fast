import { CheckCircle } from "lucide-react"

export default function Benefits() {
  const benefits = [
    {
      title: "Speed to Market",
      description: "Launch your MVP in weeks, not months, giving you a competitive edge in your market.",
    },
    {
      title: "Cost Efficiency",
      description: "Save on development costs with a focused approach that delivers exactly what you need.",
    },
    {
      title: "Scalable Architecture",
      description: "Build on a foundation that can grow with your business without requiring a complete rebuild.",
    },
    {
      title: "Investor Ready",
      description:
        "Impress potential investors with a professional, functioning product that demonstrates your vision.",
    },
    {
      title: "User Feedback",
      description: "Start collecting valuable user feedback early to refine your product and business model.",
    },
    {
      title: "Complete Ownership",
      description: "Receive full ownership of all code and database, with clean documentation for future development.",
    },
  ]

  return (
    <section id="benefits" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Why Choose My Services</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              The advantages of working with a specialized MVP developer
            </p>
          </div>
        </div>

        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 mt-12">
          {benefits.map((benefit, index) => (
            <div key={index} className="flex items-start space-x-4">
              <CheckCircle className="mt-1 h-6 w-6 flex-shrink-0 text-primary" />
              <div>
                <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
