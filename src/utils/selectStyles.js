const customStyles = {
    option: (defaultStyles, state) => ({
        // You can log the defaultStyles and state for inspection
        // You don't need to spread the defaultStyles
        ...defaultStyles,
        color: state.isSelected ? "#fff" : "#9ca3af",
        // backgroundColor: state.isSelected ? "#991b1b" : "#fff",
        fontWeight: 300,
    }),

    menu: (defaultStyles) => ({
        ...defaultStyles,
        border: "1px solid #e5e7eb",
        zIndex: 100
    }),

    control: (defaultStyles) => ({
        ...defaultStyles,
        // Notice how these are all CSS properties
        backgroundColor: "transparent",
        padding: "1px 4px",
        border: "1px solid #e5e7eb",
        boxShadow: "none",
        color: "#9ca3af"
    }),
    singleValue: (defaultStyles) => ({ ...defaultStyles, color: "#9ca3af", fontWeight: "300" }),

    placeholder: (defaultStyles) => ({ ...defaultStyles, color: "#9ca3af", fontWeight: "300" }),
};

const customTheme = (theme) => ({
    ...theme,
    borderRadius: 6,
    colors: {
        ...theme.colors,
        primary25: '#e5e7eb', // change Background color of options on hover
        primary: '#991b1b', // change the Background color of the selected option
    },
});

export { customStyles, customTheme };