import { LinearLayout, Paragraph } from "../../packages/mod.ts";
import { app } from "../index.ts";

export default function AboutPage() {
    const page = LinearLayout(app.root);
    page.ElementAlignment = "CENTER";
    page.ParentFill = "FILLXY";
    Paragraph(`You Are On The Get Started Page`, page);
}
