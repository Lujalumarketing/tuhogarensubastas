import { useEffect, useMemo, useState } from "react";
import ServiceCard from "./ServiceCard";
import GuaranteeBlock from "./GuaranteeBlock";
import ServiceFitBlock from "./ServiceFitBlock";
import ServiceComparisonBlock from "./ServiceComparisonBlock";
import { services } from "../data/services";
import { socialProofNames } from "../data/socialProofNames";

function ServicesSection() {
  const [activeServiceIndex, setActiveServiceIndex] = useState(0);
  const [activeName, setActiveName] = useState(socialProofNames[0]);

  const socialProofByServiceId = useMemo(() => {
    const activeService = services[activeServiceIndex];

    if (!activeService) {
      return {} as Record<string, string>;
    }

    return {
      [activeService.id]: `${activeName} está revisando este servicio ahora`
    };
  }, [activeName, activeServiceIndex]);

  useEffect(() => {
    if (services.length === 0 || socialProofNames.length === 0) {
      return;
    }

    const getNextServiceIndex = (current: number) => {
      let next = current;

      while (next === current) {
        next = Math.floor(Math.random() * services.length);
      }

      return next;
    };

    setActiveServiceIndex((current) => getNextServiceIndex(current));
    setActiveName((current) => {
      let next = current;

      while (next === current) {
        next = socialProofNames[Math.floor(Math.random() * socialProofNames.length)];
      }

      return next;
    });

    const intervalId = window.setInterval(() => {
      setActiveServiceIndex((current) => getNextServiceIndex(current));
      setActiveName((current) => {
        let next = current;

        while (next === current) {
          next = socialProofNames[Math.floor(Math.random() * socialProofNames.length)];
        }

        return next;
      });
    }, 20000);

    return () => {
      window.clearInterval(intervalId);
    };
  }, []);

  return (
    <section className="section-pad relative py-10 pt-6 sm:py-14 sm:pt-10 lg:py-20 lg:pt-14" id="servicios" aria-labelledby="services-title">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/20 to-background" aria-hidden="true" />
      
      <div className="wrap relative z-10">
        <div className="mb-8 max-w-3xl sm:mb-10">
          <p className="kicker">
            <span className="inline-block h-2 w-2 rounded-full bg-[#1D4ED8] animate-pulse mr-2" />
            Servicios
          </p>
          <h2 id="services-title" className="section-title">
            No juegues a ciegas con tu dinero. <span className="glow-text">Entra con estrategia.</span>
          </h2>
          <p className="section-copy">
            Elige cómo quieres hacerlo.
          </p>
          <div className="stripe-line mt-6 max-w-xl" />
        </div>

        <div className="grid gap-5 md:grid-cols-2 lg:gap-6">
          {services.map((service) => (
            <ServiceCard
              key={service.id}
              service={service}
              socialProof={socialProofByServiceId[service.id]}
            />
          ))}
        </div>

        <ServiceFitBlock />

        <ServiceComparisonBlock />

        <GuaranteeBlock />
      </div>
    </section>
  );
}

export default ServicesSection;
