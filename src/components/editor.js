import React, { useCallback, useEffect } from 'react';
import useCodeMirror from '../utils/useCodeMirror';

const Editor = (props) => {
  const { onChange, initialDoc } = props;
  const handleChange = useCallback(
    (state) => onChange(state.doc.toString()),
    [onChange]
  );
  const [refContainer, editorView] = useCodeMirror({
    initialDoc,
    onChange: handleChange,
  });

  useEffect(() => {
    if (editorView) {
      // Do nothing for now
    }
  }, [editorView]);

  return <div style={{ height: '100%' }} ref={refContainer} />;
};

export default Editor;
