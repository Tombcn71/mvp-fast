import { Code, Database, Rocket, Zap } from "lucide-react"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function Services() {
  const services = [
    {
      icon: <Rocket className="h-10 w-10 text-primary" />,
      title: "MVP Development",
      description:
        "Rapid development of your minimum viable product with all essential features to validate your idea in the market.",
    },
    {
      icon: <Code className="h-10 w-10 text-primary" />,
      title: "Full-Stack Development",
      description:
        "End-to-end development including frontend, backend, and database implementation with clean, maintainable code.",
    },
    {
      icon: <Database className="h-10 w-10 text-primary" />,
      title: "Database Design",
      description:
        "Scalable database architecture that grows with your business, ensuring data integrity and performance.",
    },
    {
      icon: <Zap className="h-10 w-10 text-primary" />,
      title: "Rapid Deployment",
      description:
        "Quick deployment to production with CI/CD pipelines, ensuring your product is live and accessible to users.",
    },
  ]

  return (
    <section id="services" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Services Offered</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Comprehensive MVP development services to bring your startup vision to life
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4 mt-12">
          {services.map((service, index) => (
            <Card key={index} className="flex flex-col items-center text-center">
              <CardHeader>
                {service.icon}
                <CardTitle>{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">{service.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
