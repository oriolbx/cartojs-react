export default {
    name: 'Populated places SPF',

    visible: true,

    cartocss: `
    #layer[adm0name = "Spain"]{
        marker-fill: #fbb4ae;
        marker-allow-overlap: true;
    }
    #layer[adm0name = "Portugal"]{
        marker-fill: #ccebc5;
        marker-allow-overlap: true;
    }
    #layer[adm0name = "France"]{
        marker-fill: #b3cde3;
        marker-allow-overlap: true;
    }
    `,

    query: `
      SELECT
        *
      FROM
        populated_places_spf
    `,

    options: {
        featureClickColumns: ['name', 'adm0name', 'pop_max']
    }
};
