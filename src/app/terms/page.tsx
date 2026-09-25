import { pageMetadata } from "@/lib/seo";
import { LegalPage } from "@/components/sections/legal-page";
import { termsOfUse } from "@/content/legal";
export const metadata = pageMetadata("/terms", termsOfUse.title, termsOfUse.description, false);
export default function Page() { return <LegalPage document={termsOfUse} />; }
