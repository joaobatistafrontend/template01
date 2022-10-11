module.exports = {
    future: {
      // removeDeprecatedGapUtilities: true,
      // purgeLayersByDefault: true,
    },
    purge: [],
    theme: {
      extend: {
        backgroundImage: theme => ({
          'logo': 'url(../img/logo.jpeg)',
          'tailwind': 'url(../img/tailwind.png)'
        })
      },
    },
    variants: {},
    plugins: [],
  }
  