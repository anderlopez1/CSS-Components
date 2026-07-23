// Curated editorial photography for the Kwipps site — real Pexels images
// (the same library the agents pull from), verified to resolve. Every URL is
// cropped to an exact size at the CDN so layout can never shift.

const pexels = (id: number, w: number, h: number) =>
    `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=${w}&h=${h}`;

export const IMG = {
    // Hero: a warm design/web studio at work — signals what Kwipps itself does.
    hero: pexels(380769, 1920, 1280),
    // Founder manifesto side image.
    manifesto: pexels(1813466, 1000, 1250),
    // Dark industries band background.
    band: pexels(2074130, 1920, 1000),
    // "A site for every kind of business" slideshow — one business type per slide.
    showcase: [
        { key: "biz.1", src: pexels(683039, 1600, 1040) },  // café
        { key: "biz.2", src: pexels(1267320, 1600, 1040) }, // restaurant / fine dining
        { key: "biz.3", src: pexels(1855214, 1600, 1040) }, // bakery
        { key: "biz.4", src: pexels(3993449, 1600, 1040) }, // hair salon
        { key: "biz.5", src: pexels(897262, 1600, 1040) },  // barbershop
        { key: "biz.6", src: pexels(972995, 1600, 1040) },  // boutique / fashion
        { key: "biz.7", src: pexels(1058771, 1600, 1040) }, // florist
        { key: "biz.8", src: pexels(3845981, 1600, 1040) }, // dental practice
        { key: "biz.9", src: pexels(1954524, 1600, 1040) }, // fitness studio
        { key: "biz.10", src: pexels(2467558, 1600, 1040) }, // boutique hotel
    ],
};

export const INTAKE_URL = "https://nebrrtkdrsljywhkxxrs.supabase.co/functions/v1/intake";
