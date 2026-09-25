import { pageMetadata } from "@/lib/seo";
import { LegalPage } from "@/components/sections/legal-page";
import { privacyPolicy } from "@/content/legal";
export const metadata = pageMetadata("/privacy", privacyPolicy.title, privacyPolicy.description, false);
export default function Page() { return <LegalPage document={privacyPolicy} />; }
