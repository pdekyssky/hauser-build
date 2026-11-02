import ServicePageContent from "@/components/ServicePageContent";
import JsonLd from "@/components/JsonLd";
import { getServiceBySlug } from "@/lib/services";
import { absoluteUrl, createMetadata, serviceJsonLd } from "@/lib/seo";

const service = getServiceBySlug("exterierove-omietky")!;

export const metadata = createMetadata({
  title: service.seo.title,
  description: service.seo.description,
  path: `/${service.slug}/`,
  image: service.image.src,
});

export default function ExteriorPlasterPage() {
  return (
    <>
      <JsonLd
        data={serviceJsonLd({
          name: service.title,
          description: service.seo.description,
          url: absoluteUrl(`/${service.slug}/`),
        })}
      />
      <ServicePageContent service={service} />
    </>
  );
}
