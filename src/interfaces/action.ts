interface Action<T = null> {
  type: string,
  payload?: T,
}

export default Action;
