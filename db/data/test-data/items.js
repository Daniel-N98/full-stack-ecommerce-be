const items = [
  {
    user_id: 3,
    name: "In",
    description:
      "egestas. Aliquam nec enim. Nunc ut erat. Sed nunc est, mollis non, cursus non, egestas a, dui. Cras pellentesque. Sed",
    preview_url: "https://facebook.com/en-us",
    cost: 131,
    quantity: 7,
    category_id: 1,
  },
  {
    user_id: 1,
    name: "non, cursus",
    description:
      "elit. Curabitur sed tortor. Integer aliquam adipiscing lacus. Ut nec urna et arcu imperdiet ullamcorper. Duis at lacus. Quisque",
    preview_url: "http://whatsapp.com/en-ca",
    cost: 286,
    quantity: 3,
    category_id: 1,
  },
  {
    user_id: 1,
    name: "morbi tristique senectus",
    description:
      "ut ipsum ac mi eleifend egestas. Sed pharetra, felis eget varius ultrices, mauris ipsum",
    preview_url: "https://pinterest.com/one",
    cost: 289,
    quantity: 9,
    category_id: 1,
  },
  {
    user_id: 1,
    name: "Mauris ut quam",
    description:
      "iaculis enim, sit amet ornare lectus justo eu arcu. Morbi sit amet massa. Quisque porttitor eros nec tellus. Nunc",
    preview_url: "http://twitter.com/en-ca",
    cost: 23,
    quantity: 7,
    category_id: 2,
  },
  {
    user_id: 4,
    name: "eros. Proin ultrices. Duis",
    description:
      "mauris ipsum porta elit, a feugiat tellus lorem eu metus. In lorem. Donec elementum, lorem",
    preview_url: "https://walmart.com/one",
    cost: 5,
    quantity: 8,
    category_id: 3,
  },
  {
    user_id: 2,
    name: "rhoncus id,",
    description:
      "at fringilla purus mauris a nunc. In at pede. Cras vulputate velit eu sem. Pellentesque ut ipsum ac mi",
    preview_url: "http://walmart.com/fr",
    cost: 47,
    quantity: 3,
    category_id: 3,
  },
  {
    user_id: 1,
    name: "purus,",
    description:
      "tempor, est ac mattis semper, dui lectus rutrum urna, nec luctus felis purus ac tellus. Suspendisse sed dolor. Fusce mi",
    preview_url: "http://guardian.co.uk/fr",
    cost: 114,
    quantity: 9,
    category_id: 3,
  },
  {
    user_id: 1,
    name: "volutpat. Nulla facilisis. Suspendisse",
    description:
      "commodo tincidunt nibh. Phasellus nulla. Integer vulputate, risus",
    preview_url: "http://cnn.com/one",
    cost: 236,
    quantity: 8,
    category_id: 2,
  },
  {
    user_id: 3,
    name: "vehicula.",
    description:
      "per inceptos hymenaeos. Mauris ut quam vel sapien imperdiet ornare.",
    preview_url: "https://youtube.com/sub",
    cost: 257,
    quantity: 4,
    category_id: 5,
  },
  {
    user_id: 4,
    name: "eget metus. In",
    description:
      "vel arcu. Curabitur ut odio vel est tempor bibendum. Donec felis orci, adipiscing non, luctus sit amet, faucibus ut, nulla.",
    preview_url: "https://wikipedia.org/one",
    cost: 484,
    quantity: 4,
    category_id: 4,
  },
  {
    user_id: 3,
    name: "eros. Nam consequat",
    description:
      "nulla. In tincidunt congue turpis. In condimentum. Donec at arcu. Vestibulum ante ipsum primis in faucibus orci",
    preview_url: "http://ebay.com/user/110",
    cost: 371,
    quantity: 6,
    category_id: 3,
  },
  {
    user_id: 4,
    name: "ipsum non",
    description: "libero est, congue a, aliquet vel, vulputate",
    preview_url: "http://yahoo.com/settings",
    cost: 495,
    quantity: 7,
    category_id: 2,
  },
  {
    user_id: 3,
    name: "ullamcorper eu, euismod",
    description: "tellus lorem eu metus. In lorem. Donec elementum,",
    preview_url: "http://walmart.com/en-ca",
    cost: 112,
    quantity: 5,
    category_id: 1,
  },
  {
    user_id: 2,
    name: "non, vestibulum",
    description:
      "inceptos hymenaeos. Mauris ut quam vel sapien imperdiet ornare. In faucibus. Morbi vehicula. Pellentesque tincidunt",
    preview_url: "https://guardian.co.uk/sub",
    cost: 475,
    quantity: 1,
    category_id: 1,
  },
  {
    user_id: 4,
    name: "aliquet odio. Etiam ligula",
    description: "sagittis lobortis mauris. Suspendisse aliquet",
    preview_url: "https://guardian.co.uk/fr",
    cost: 135,
    quantity: 2,
    category_id: 1,
  },
  {
    user_id: 4,
    name: "dignissim tempor",
    description:
      "sit amet lorem semper auctor. Mauris vel turpis. Aliquam adipiscing lobortis risus. In",
    preview_url: "https://walmart.com/group/9",
    cost: 209,
    quantity: 9,
    category_id: 1,
  },
  {
    user_id: 1,
    name: "quam. Curabitur vel",
    description:
      "augue scelerisque mollis. Phasellus libero mauris, aliquam eu, accumsan sed, facilisis vitae, orci. Phasellus dapibus quam quis",
    preview_url: "http://instagram.com/one",
    cost: 24,
    quantity: 1,
    category_id: 1,
  },
  {
    user_id: 1,
    name: "nunc id enim.",
    description:
      "consequat purus. Maecenas libero est, congue a, aliquet vel, vulputate eu, odio. Phasellus at",
    preview_url: "https://walmart.com/settings",
    cost: 356,
    quantity: 9,
    category_id: 1,
  },
  {
    user_id: 4,
    name: "justo",
    description:
      "Nullam ut nisi a odio semper cursus. Integer mollis. Integer tincidunt aliquam arcu. Aliquam",
    preview_url: "https://zoom.us/sub",
    cost: 182,
    quantity: 1,
    category_id: 1,
  },
  {
    user_id: 3,
    name: "egestas. Sed pharetra, felis",
    description: "aliquet lobortis, nisi nibh lacinia",
    preview_url: "http://bbc.co.uk/group/9",
    cost: 231,
    quantity: 1,
    category_id: 1,
  },
];

export default items;
