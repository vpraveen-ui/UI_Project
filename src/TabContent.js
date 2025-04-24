const TabContent = ({ currentTab }) => {
    switch (currentTab) {
      case "HTML":
        return <p>Welcome to the HTML tutorial.</p>;
      case "CSS":
        return <p>Here we learn about CSS styling.</p>;
      case "React":
        return <p>This section covers React basics.</p>;
      default:
        return <p>Select a tab to start learning!</p>;
    }
  };

  export default TabContent;