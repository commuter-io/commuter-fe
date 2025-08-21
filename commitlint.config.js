module.exports = {
	extends: ["@commitlint/config-conventional"],
	parserPreset: {
		parserOpts: {
			headerPattern: /^(?<type>.+):\s(?<subject>.+)$/,
			headerCorrespondence: ["type", "subject"],
		},
	},
	rules: {
		"subject-empty": [2, "never"],
		"subject-full-stop": [2, "never", "."],
		"subject-case": [0, "never"],
		"type-empty": [2, "never"],
		"type-enum": [
			2,
			"always",
			[
				"✨ feat",
				"🚧 wip",
				"🔨 update",
				"💄 style",
				"✏️ chore",
				"🐛 fix",
				"🚑 hotfix",
				"🔥 remove",
				"♻️ refactor",
				"🎨 asset",
				"🔧 config",
				"📦 build",
				"💚 ci",
				"📝 docs",
			],
		],
	},
};
