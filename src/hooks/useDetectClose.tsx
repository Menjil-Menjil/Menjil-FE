// 참고: https://velog.io/@poiu0329/React-%EB%93%9C%EB%A1%AD%EB%8B%A4%EC%9A%B4-%EA%B5%AC%ED%98%84%ED%95%98%EA%B8%B0

import { useState, useEffect } from 'react';

const useDetectClose = (ref, initialState) => {
    const [isOpen, setIsOpen] = useState(initialState);

    useEffect(() => {
        const pageClickEvent = e => {
          if (ref.current && !ref.current.contains(e.target)) {
            setIsOpen(!isOpen);
          }
        };

        if (isOpen) {
          window.addEventListener('click', pageClickEvent);
        }

        return () => {
          window.removeEventListener('click', pageClickEvent);
        };
      }, [isOpen, ref]);
    return [isOpen, setIsOpen];
}

export default useDetectClose;