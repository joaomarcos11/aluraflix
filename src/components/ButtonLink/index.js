import React from 'react';

function ButtonLink(props) {
  // props => {className: "o que alguem passar", href:"/", children: conteudo da tag}

  // console.log(props);

  const { href, className, children } = props;

  return (
    <a href={href} className={className}>
      {children}
    </a>
  );
}

export default ButtonLink;
