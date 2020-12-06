type FalsyStyle = null | undefined | false | "";

export default function joinCls(...classes: (string | FalsyStyle)[]) {
  return classes.filter((c) => c).join(" ");
}
