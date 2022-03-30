const THEMES = [
  "3den",
  "adben",
  "af-magic",
  "afowler",
  "agnoster",
  "alanpeabody",
  "amuse",
  "apple",
  "arrow",
  "aussiegeek",
  "avit",
  "awesomepanda",
  "bira",
  "blinks",
  "bureau",
  "candy-kingdom",
  "candy",
  "clean",
  "cloud",
  "crcandy",
  "crunch",
  "cypher",
  "dallas",
  "darkblood",
  "daveverwer",
  "dieter",
  "dogenpunk",
  "dpoggi",
  "dst",
  "dstufft",
  "duellj",
  "eastwood",
  "edvardm",
  "emotty",
  "essembeh",
  "evan",
  "fino-time",
  "fino",
  "fishy",
  "flazz",
  "fletcherm",
  "fox",
  "frisk",
  "frontcube",
  "funky",
  "fwalch",
  "gallifrey",
  "gallois",
  "garyblessington",
  "gentoo",
  "geoffgarside",
  "gianu",
  "gnzh",
  "gozilla",
  "half-life",
  "humza",
  "imajes",
  "intheloop",
  "itchy",
  "jaischeema",
  "jbergantine",
  "jispwoso",
  "jnrowe",
  "jonathan",
  "josh",
  "jreese",
  "jtriley",
  "juanghurtado",
  "junkfood",
  "kafeitu",
  "kardan",
  "kennethreitz",
  "kiwi",
  "kolo",
  "kphoen",
  "lambda",
  "linuxonly",
  "lukerandall",
  "macovsky",
  "maran",
  "mgutz",
  "mh",
  "michelebologna",
  "mikeh",
  "miloshadzic",
  "minimal",
  "mira",
  "mlh",
  "mortalscumbag",
  "mrtazz",
  "murilasso",
  "muse",
  "nanotech",
  "nebirhos",
  "nicoulaj",
  "norm",
  "obraun",
  "peepcode",
  "philips",
  "pmcgee",
  "pygmalion-virtualenv",
  "pygmalion",
  "random",
  "re5et",
  "refined",
  "rgm",
  "risto",
  "rixius",
  "rkj-repos",
  "rkj",
  "robbyrussell",
  "sammy",
  "simonoff",
  "simple",
  "skaro",
  "smt",
  "Soliah",
  "sonicradish",
  "sorin",
  "sporty_256",
  "steeef",
  "strug",
  "sunaku",
  "sunrise",
  "superjarin",
  "suvash",
  "takashiyoshida",
  "terminalparty",
  "theunraveler",
  "tjkirch",
  "tjkirch_mod",
  "tonotdo",
  "trapd00r",
  "wedisagree",
  "wezm+",
  "wezm",
  "wuffers",
  "xiong-chiamiov-plus",
  "xiong-chiamiov",
  "ys",
  "zhann",
];

const PLUGINS = [
  "1password",
  "adb",
  "ag",
  "alias-finder",
  "aliases",
  "ansible",
  "ant",
  "apache2-macports",
  "arcanist",
  "archlinux",
  "asdf",
  "autoenv",
  "autojump",
  "autopep8",
  "aws",
  "battery",
  "bazel",
  "bbedit",
  "bedtools",
  "bgnotify",
  "boot2docker",
  "bower",
  "branch",
  "brew",
  "bundler",
  "cabal",
  "cake",
  "cakephp3",
  "capistrano",
  "cargo",
  "cask",
  "catimg",
  "celery",
  "chruby",
  "chucknorris",
  "cloudfoundry",
  "codeclimate",
  "coffee",
  "colemak",
  "colored-man-pages",
  "colorize",
  "command-not-found",
  "common-aliases",
  "compleat",
  "composer",
  "copybuffer",
  "copydir",
  "copyfile",
  "copypath",
  "cp",
  "cpanm",
  "dash",
  "debian",
  "deno",
  "dircycle",
  "direnv",
  "dirhistory",
  "dirpersist",
  "dnf",
  "dnote",
  "docker",
  "docker-compose",
  "docker-machine",
  "doctl",
  "dotenv",
  "dotnet",
  "droplr",
  "drush",
  "eecms",
  "emacs",
  "ember-cli",
  "emoji",
  "emoji-clock",
  "emotty",
  "encode64",
  "extract",
  "fabric",
  "fancy-ctrl-z",
  "fasd",
  "fastfile",
  "fbterm",
  "fd",
  "fig",
  "firewalld",
  "flutter",
  "fnm",
  "forklift",
  "fossil",
  "frontend-search",
  "fzf",
  "gas",
  "gatsby",
  "gb",
  "gcloud",
  "geeknote",
  "gem",
  "genpass",
  "gh",
  "git",
  "git-auto-fetch",
  "git-escape-magic",
  "git-extras",
  "git-flow",
  "git-flow-avh",
  "git-hubflow",
  "git-lfs",
  "git-prompt",
  "gitfast",
  "github",
  "gitignore",
  "glassfish",
  "globalias",
  "gnu-utils",
  "golang",
  "gpg-agent",
  "gradle",
  "grails",
  "grc",
  "grunt",
  "gulp",
  "hanami",
  "helm",
  "heroku",
  "history",
  "history-substring-search",
  "hitchhiker",
  "hitokoto",
  "homestead",
  "httpie",
  "invoke",
  "ionic",
  "ipfs",
  "isodate",
  "istioctl",
  "iterm2",
  "jake-node",
  "jenv",
  "jfrog",
  "jhbuild",
  "jira",
  "jruby",
  "jsontools",
  "juju",
  "jump",
  "kate",
  "keychain",
  "kitchen",
  "kn",
  "knife",
  "knife_ssh",
  "kops",
  "kube-ps1",
  "kubectl",
  "kubectx",
  "lando",
  "laravel",
  "laravel4",
  "laravel5",
  "last-working-dir",
  "lein",
  "lighthouse",
  "lol",
  "lpass",
  "lxd",
  "macos",
  "macports",
  "magic-enter",
  "man",
  "marked2",
  "mercurial",
  "meteor",
  "microk8s",
  "minikube",
  "mix",
  "mix-fast",
  "mongocli",
  "mosh",
  "multipass",
  "mvn",
  "mysql-macports",
  "n98-magerun",
  "nanoc",
  "ng",
  "nmap",
  "node",
  "nomad",
  "npm",
  "npx",
  "nvm",
  "oc",
  "octozen",
  "operator-sdk",
  "osx",
  "otp",
  "pass",
  "paver",
  "pep8",
  "per-directory-history",
  "percol",
  "perl",
  "perms",
  "phing",
  "pip",
  "pipenv",
  "pj",
  "please",
  "pm2",
  "pod",
  "poetry",
  "postgres",
  "pow",
  "powder",
  "powify",
  "profiles",
  "pyenv",
  "pylint",
  "python",
  "rails",
  "rake",
  "rake-fast",
  "rand-quote",
  "rbenv",
  "rbfu",
  "rbw",
  "react-native",
  "rebar",
  "redis-cli",
  "repo",
  "ripgrep",
  "ros",
  "rsync",
  "ruby",
  "rust",
  "rustup",
  "rvm",
  "safe-paste",
  "salt",
  "samtools",
  "sbt",
  "scala",
  "scd",
  "screen",
  "scw",
  "sdk",
  "sfdx",
  "sfffe",
  "shell-proxy",
  "shrink-path",
  "singlechar",
  "spring",
  "sprunge",
  "ssh-agent",
  "stack",
  "sublime",
  "sublime-merge",
  "sudo",
  "supervisor",
  "suse",
  "svcat",
  "svn",
  "svn-fast-info",
  "swiftpm",
  "symfony",
  "symfony2",
  "systemadmin",
  "systemd",
  "taskwarrior",
  "term_tab",
  "terminitor",
  "terraform",
  "textastic",
  "textmate",
  "thefuck",
  "themes",
  "thor",
  "tig",
  "timer",
  "tmux",
  "tmux-cssh",
  "tmuxinator",
  "toolbox",
  "torrent",
  "transfer",
  "tugboat",
  "ubuntu",
  "ufw",
  "universalarchive",
  "urltools",
  "vagrant",
  "vagrant-prompt",
  "vault",
  "vi-mode",
  "vim-interaction",
  "virtualenv",
  "virtualenvwrapper",
  "volta",
  "vscode",
  "vundle",
  "wakeonlan",
  "wd",
  "web-search",
  "wp-cli",
  "xcode",
  "yarn",
  "yii",
  "yii2",
  "yum",
  "z",
  "zbell",
  "zeus",
  "zoxide",
  "zsh-interactive-cd",
  "zsh-navigation-tools",
];

type Mode = string;
const modes: Mode[] = ["prompt", "auto", "reminder", "disabled"];

const plugin: Fig.Plugin = {
  name: "ohmyzsh",
  type: "shell",
  description:
    "A community-driven framework for managing your zsh configuration",
  icon: "https://avatars.githubusercontent.com/u/22552083",
  site: "https://ohmyz.sh/",
  docs: "https://github.com/ohmyzsh/ohmyzsh/wiki",
  github: "ohmyzsh/ohmyzsh",
  twitter: "ohmyzsh",
  license: ["MIT"],
  shells: ["zsh"],
  categories: ["Framework"],
  installation: {
    origin: "github",
    preScript: ({ ctx }) => `export ZSH="${ctx.plugin.installDirectory}"`,
    sourceFiles: "oh-my-zsh.sh",
  },
  configuration: [
    {
      displayName: "Plugins",
      description: "Oh My Zsh plugins to load",
      type: "environmentVariable",
      interface: "multiselect",
      default: [],
      options: async ({ env }) =>
        env
          ? await env.listFolder(`${env.plugin.installDirectory}/plugins`)
          : PLUGINS,
      environmentVariable: "plugins",
    },
    {
      displayName: "Theme",
      description: "The Oh My Zsh theme to use",
      type: "environmentVariable",
      interface: "select",
      default: "robbyrussell",
      options: async ({ env }) => {
        if (!env) {
          return THEMES;
        }
        const themes = await env.listFolder(
          `${env.plugin.installDirectory}/themes`
        );
        return themes.map((theme) => theme.replace(".zsh-theme", ""));
      },
      environmentVariable: "ZSH_THEME",
    },
    {
      displayName: "Getting Updates",
      description:
        "By default, you will be prompted to check for updates every 2 weeks.",
      configuration: [
        {
          name: "mode",
          type: "script",
          description: "",
          interface: "multiselect",
          default: "prompt",
          options: modes,
          compile: ({ value }) => `zstyle ':omz:update' mode ${value}`,
        },
        {
          name: "frequency",
          type: "script",
          description: "How often Oh My Zsh checks for updates",
          interface: "text",
          default: 14,
          compile: ({ value }) => `zstyle ':omz:update' frequency ${value}`,
          disabled: ({ config }) => config["mode"] !== "disabled",
        },
      ],
    },
    {
      name: "test",
      type: "script",
      description: "hello there",
      interface: "checkbox",
      default: false,
      compile: ({ value }) =>
        `zstyle :prompt:pure:git:stash show ${value ? "yes" : "no"}`,
    },
  ],
};

export default plugin;
