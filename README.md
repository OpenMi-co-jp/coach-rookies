# コーチルーキーズ公式サイト

AI時代を勝ち抜く若手コーチのコミュニティサイト

## 技術スタック

- **Framework**: Next.js 15.5.4
- **Styling**: Tailwind CSS + shadcn/ui
- **Icons**: Lucide React
- **Deployment**: Vercel

## 開発環境のセットアップ

```bash
# 依存関係のインストール
pnpm install

# 開発サーバーの起動
pnpm dev

# ビルド
pnpm build

# 本番サーバーの起動
pnpm start
```

## プロジェクト構造

```
coach-rookies/
├── app/               # Next.js App Router
│   ├── layout.tsx    # ルートレイアウト
│   ├── page.tsx      # ホームページ
│   └── globals.css   # グローバルCSS
├── components/        # Reactコンポーネント
│   ├── ui/           # shadcn/uiコンポーネント
│   └── sections/     # ページセクション
├── lib/               # ユーティリティ関数
└── public/            # 静的ファイル
```

## デプロイ

Vercelへのデプロイは以下の手順で行います：

1. GitHubにリポジトリを作成
2. Vercelで新しいプロジェクトを作成
3. GitHubリポジトリを接続
4. 自動デプロイが開始されます

## カスタマイズ

### ブランドカラー

`tailwind.config.ts`で以下のカラーが定義されています：

- `brand-orange`: #FF6B35
- `brand-blue`: #4ECDC4
- `brand-green`: #95E1D3
- `brand-yellow`: #FFE66D