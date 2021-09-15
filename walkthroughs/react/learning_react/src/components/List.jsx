const List = ({ type = "ul", list }) => {
  if (type == "ol") {
    return (
      <ol>
        {list.map((item, idx) => {
          return (
            <li key={idx}>
              {item.priority} | {item.content}
            </li>
          );
        })}
      </ol>
    );
  } else {
    return (
      <ul>
        {list.map((item, idx) => {
          return (
            <li key={idx}>
              {item.priority} | {item.content}
            </li>
          );
        })}
      </ul>
    );
  }
};

export default List;
