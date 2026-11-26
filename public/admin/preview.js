
const h = window.h;

const EntradaPreview = ({ entry, widgetFor, getAsset }) => {

    const title = entry.getIn(["data", "title"]) || "";
    const category = entry.getIn(["data", "category"]) || "";
    const description = entry.getIn(["data", "description"]) || "";
    const date = entry.getIn(["data", "date"]) || "";
    const image = entry.getIn(["data", "image"]) || "";

    const imageUrl = image ? getAsset(image).toString() : "";

    let dataFormatejada = "";

    if (date) {
        const d = new Date(date);

        dataFormatejada = d.toLocaleDateString("ca-ES", {
            day: "numeric",
            month: "long",
            year: "numeric"
        });
    }

    return h(
        "article",
        { className: "preview-entrada" },

        h(
            "div",
            { className: "preview-categoria" },
            category
        ),

        h(
            "h1",
            { className: "preview-titol" },
            title
        ),

        h(
            "div",
            { className: "preview-descripcio" },
            description
        ),

        h(
            "div",
            { className: "preview-data" },
            dataFormatejada
        ),

        imageUrl ? h(
            "img",
            {
                className: "preview-imatge",
                src: imageUrl,
                alt: title,
                style: {
                    width: "100%",
                    height: "auto",
                    display: "block",
                    margin: "25px 0",
                    borderRadius: "4px"
                }
            }
        ) : null,

        h(
            "div",
            { className: "preview-cos" },
            widgetFor("body")
        )
    );
};

CMS.registerPreviewTemplate("entrades", EntradaPreview);
CMS.registerPreviewStyle("/admin/preview.css");
