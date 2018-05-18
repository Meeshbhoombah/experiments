const Names = () => {
  const names = ['John', 'Jill', 'Jack'];

  return React.createElement(
    'div',
    null,
    React.createElement('h2', null, 'Names'),
    React.createElement(
      'ul',
      { className: 'names' },
      names.map(name => {
        return React.createElement(
          'li',
          { className: 'name' },
          name
        );
      })
    )
  );
};


/* Compontent Rewritten in JSX */
const Names = () => {
  const names = ['John', 'Jill', 'Jack'];

  return (
    <div>
      <h2>Names</h2>

      {/* This is a list of names */}
      <ul className="names">{
        names.map(name =>
          <li className="name">{name}</li>
        )
      }</ul>
    </div>
  );
};

