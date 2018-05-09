# New Arch

## 採用したもの

* typescript
* prettier
* tslint
* react
* redux
* jest
* styled-components
* dux pattern

## 重視したこと

* 中規模のコードを管理する
* 実装パターンを容易する
  * react component
  * reducer
  * そのテスト
* 骨組みを決めれば自動的にコードの場所が決まる
* コピペからはじめられる

## 状態の考え方

すべてを reducer に集約する。副作用で起きる場所を一箇所に集約する(redux store)
シングルコンポーネントの setState でもいいが、結果として自前の Store 層になりがち「redux を小さく使う」のがどういう路線になっても無駄がないと思う。

## なぜ型を持っているか考える

フロントエンドは DOM のテストを書くのが難しい。なので静的検査の力を借りたい。

React の開発で一番問題が起きるのは component 間の props の不整合であり、最悪ここの静的検査があれば十分。また、ルートに近い要素で、Snapshot テストで差分が発生したか、しなかったを意識する。リファクタしたはずなのに差分が発生しているというミスが検知できる。

そして、いわゆるドメインロジックというものは Store に集中する。 Action と Reducer の関係を適切にテストしておけばよい。しかし外部 IO がメインになると、静的検査が効かなくなり、Reducer のテストに意味はなくなっていく。

## styled-components

* 前向きな理由: CSS のメンテナンス性の低下理由の殆どは、コンポーネントの親子関係を破壊するセレクタで、 CSS in JS はその Component に対して閉じた装飾を行う。これはコンポーネント志向の設計ならば良い方向に働く。
* 後ろ向きな理由: Webpack のメンテナンス困難を引き起こすのはほとんど CSS Modules で、これを避けると CSS in JS から選ぶことになり、一番勢いがあるのが styled
* おまけの理由: これを覚えたら ReactNative でも使える(CSS in JS しかない)

typescript + vscode + styled-components ならインラインでもハイライトできるし、prettier の CSS 整形も掛かる。

難点は CSS の外注がしづらい。キャッチアップに 3 日は掛かるかもしれない。

## Lint の役割

* レビューコストを下げる
* デッドコードを出さない
* アンチパターンを踏ませない
* ホワイトスペース周りはフォーマッタに任せる

ということで prettier に空白周りを全部任せつつ、tslint で経験上、コード品質に一番効くのは 未使用変数の警告で、最悪これさえ消しておけば良い。

## Reducer と Action Creator / Dux pattern

`reduces/*.ts` で reducer を export default しつつ、そのスコープで action を export fuction する。

理由としては、 action と reducer は疎であることは稀で、基本的に一意に決まる。推論機に多くヒントを与えるためにも凝集性を重視する。

Reducer は Object Rest Spread を使いつつ更新する

## インターフェースの命名規則

MS の命名規則では、IState や IAction など、Interface には I を付けることが多く, tslint でもそうなっているが、GitHub に上がっているコードを見る限りこれに従っているのは C#派だけで、基本的に無視されている。個人的にも不要であると思う。

## アトミックデザインの借用

React は コンポーネント志向のライブラリであるため、コンポーネント志向のデザインパターンと相性がいい。ということでアトミックデザインの用語と分類を借用する。

* Atoms: 他に依存しないコンポーネント
  * Text
  * Button
* Molecules: 複数の Atom からなるコンポーネント
  * Header
* Organisms: 複数の Atom と Molecules からなるコンポーネント兼 Container
  * Counter
* Pages: ルーティング時の複数のエントリポイント
* Template: レイアウト

大事なのは、コンポーネントの再利用性のみで Component を分類し、**分類名でディレクトリを切らない**。

注意: components/container パターンではない。organisms の層で connect している。ここで、Pages/Templates はかけ離れてる点に注意

[Atomic Design を実案件に導入して運用してみた結果はどうなのか - I'm kubosho\_](http://blog.kubosho.com/entry/atomic-design-on-abematv)

[danilowoz/react-atomic-design: Boilerplate with the methodology Atomic Design using a few cool things.](https://github.com/danilowoz/react-atomic-design)

## 未解決

* TypeScript のベストプラクティスを調べきれていない
* redux v4 が壊れている
