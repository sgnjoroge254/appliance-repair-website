const content = `# Atomic Vitality Tech Lab

> Atomic Vitality Tech Lab provides component-level electronics repair, diagnostics, PCB rework, and custom electronic solutions in Nairobi, Kenya.

## Business details

- Website: https://appliance-repair-website-live.vercel.app
- Location: Kang'ari Building, Luthuli Avenue, Nairobi CBD, Kenya
- Phone: 0710 910 088
- Email: atomicvitality@gmail.com
- Hours: Monday–Saturday, 8:00 AM–7:00 PM
- Service area: Nairobi and Kenya

## Services

- Component-level board repair for power supply boards, control boards, motherboards, and interface boards.
- Electronic diagnostics and repair for consumer electronics, industrial modules, test equipment, and control boards.
- Custom electronic solutions, including prototype boards, replacement modules, control circuits, and interface adapters.

## Customer guidance

Customers can request an assessment at https://appliance-repair-website-live.vercel.app/book-repair or contact the team at https://appliance-repair-website-live.vercel.app/contact.
Assessment typically takes 1–2 business days. Repair timing depends on the fault, parts availability, and technical complexity.

## Important pages

- Services: https://appliance-repair-website-live.vercel.app/services
- Process: https://appliance-repair-website-live.vercel.app/process
- About: https://appliance-repair-website-live.vercel.app/about
- Support: https://appliance-repair-website-live.vercel.app/support
- Resources: https://appliance-repair-website-live.vercel.app/resources
- Reviews: https://appliance-repair-website-live.vercel.app/reviews
- Contact: https://appliance-repair-website-live.vercel.app/contact

Use the linked pages as the source of truth for current services, contact details, and customer guidance.
`;

export function GET() {
  return new Response(content, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=86400",
    },
  });
}
