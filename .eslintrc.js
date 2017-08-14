module.exports = {
    "extends": "airbnb",
		"env" : {
				"node" : true,
				"browser" : true,
		},
    "plugins": [
        "react",
        "jsx-a11y",
        "import"
    ],
		"rules" : {
				"jsx-a11y/href-no-hash" : "off",
				"import/no-extraneous-dependencies" : "off",
				"react/jsx-filename-extension" : "off",
        "import/prefer-default-export" : "off"
		}
};
