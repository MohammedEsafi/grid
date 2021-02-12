import { useEffect, useCallback, useRef } from 'react';
import { getRefElement, isSSR } from '@utils';

const defaultTarget = isSSR() ? null : window;

const useEventListener = (type, listener, element = defaultTarget) => {
	const savedListener = useRef(null);

	useEffect(() => {
		savedListener.current = listener;
	}, [listener]);

	const handler = useCallback((event) => {
		savedListener.current(event);
	}, []);

	useEffect(() => {
		const target = getRefElement(element);

		target.addEventListener(type, handler);

		return () => {
			target.removeEventListener(type, handler);
		};
	}, [type, element, handler]);
};

export default useEventListener;
