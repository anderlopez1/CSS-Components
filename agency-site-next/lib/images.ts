// Curated editorial photography for the Kwipps site — real Pexels images
// (the same library the agents pull from), verified to resolve. Every URL is
// cropped to an exact size at the CDN so layout can never shift.

const pexels = (id: number, w: number, h: number) =>
    `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=${w}&h=${h}`;

export const IMG = {
    hero: pexels(260922, 1920, 1280), // warm, low-lit bar interior
    manifesto: pexels(1813466, 1000, 1250), // coffee & pastry at a window, street beyond
    band: pexels(2074130, 1920, 1000), // overhead café table, hands & books
    work: [
        { key: "work.1", src: pexels(683039, 900, 1120) }, // café counter
        { key: "work.2", src: pexels(1855214, 900, 1120) }, // bakery display
        { key: "work.3", src: pexels(1267320, 900, 1120) }, // fine-dining plating
        { key: "work.4", src: pexels(2467558, 900, 1120) }, // hotel on a rainy street
        { key: "work.5", src: pexels(262978, 900, 1120) }, // table service
        { key: "work.6", src: pexels(3771120, 900, 1120) }, // artisan kitchen
    ],
};

export const INTAKE_URL = "https://nebrrtkdrsljywhkxxrs.supabase.co/functions/v1/intake";
