const theme = {
  colors: {
    background: `#121212`,
    // like active (for links hover and such)
    primary: `#aca599`,
    link: `#3992ff`,
    // used for active link background in sidebar, and th / tds
    shape: `#121212`,
    title: `#fff`,
    text: `#b7bcbe`,
    components: {
      blockquote: {
        background: `#feebc8`,
        text: `#2d3748`,
      },

      // blockquote surrounded by a .notes wrapper
      notes: {
        background: `#313131`,
        text: `#b7bcbe`,
      },
    },
  },
  fonts: {
    body: `-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif`,
    size: `16px`
  },
  sidebar: {
    fonts: {
      size: {
        headings: `14px`,
        items: `15px`
      }
    }
  }
};

export default theme 
