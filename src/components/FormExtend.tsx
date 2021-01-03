import React, {ComponentProps, FormEvent, useCallback} from 'react';

export default function FormExtend({onSubmit, ...rest}: ComponentProps<'form'>) {

  const _onSubmit = useCallback((event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSubmit?.(event);
  }, [onSubmit]);

  return (
      <form onSubmit={_onSubmit} {...rest}/>
  );
}
