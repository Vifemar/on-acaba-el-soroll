const h = window.h;

const EntradaPreview = ({ entry, widgetFor }) => {

    const title = entry.getIn(["data", "title"]) || "";
    const category = entry.getIn(["data", "category"]) || "";
    const description = entry.getIn(["data", "description"]) || "";
    const date = entry.getIn(["data", "date"]) || "";

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

        h(
            "div",
            { className: "preview-cos" },
            widgetFor("body")
        )
    );
};

CMS.registerPreviewTemplate("entrades", EntradaPreview);
CMS.registerPreviewStyle("/admin/preview.css");