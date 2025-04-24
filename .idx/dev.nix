# To learn more about how to use Nix to configure your environment
# see: https://firebase.google.com/docs/studio/customize-workspace
{ pkgs, ... }: {
  # Which nixpkgs channel to use.
  channel = "stable-24.05"; # or "unstable"

  # Use https://search.nixos.org/packages to find packages
  packages = [
    # pkgs.go
    # pkgs.python311
    # pkgs.python311Packages.pip
    pkgs.nodejs_20
    pkgs.nodePackages.nodemon
  ];

  # Sets global environment variables in the workspace
  env = {
    # DATABASE_URL = "mongodb://localhost:27017";
    # NODE_ENV = "development";
  };
  idx = {
    # Search for the extensions you want on https://open-vsx.org/ and use "publisher.id"
    extensions = [
      # "vscodevim.vim"
    ];

    # Enable previews
    previews = {
      enable = true;
      previews = {
        web = {
          # Example: run "npm run dev" with PORT set to IDX's defined port for previews,
          # and show it in IDX's web preview panel
          command = ["npm" "run" "dev"];
          manager = "web";
          # Specify the path to the frontend directory
          # Adjust to your project path
          cwd = "/home/user/health-care/frontend"; 
          env = {
            # Environment variables specific to IDX's Web Preview and makes sure the server (like Vite) uses the dynamically assigned port that IDX provides
            # Environment variables to set for your server
            # Ensure the backend or frontend uses the dynamically set $PORT
            PORT = "$PORT";
          };
        };
      };
    };

    # Workspace lifecycle hooks
    workspace = {
      # Runs when a workspace is first created
      onCreate = {
        # Example: install JS dependencies from NPM
        # npm-install = "npm install";
        # The '' (double single quotes) let you write multi-line shell commands
        # &: Start your backend using npm run dev and run it in background, so other tasks (like starting the frontend or initializing other services) can proceed without waiting.
        # start-backend = ''
        #   cd backend
        #   npm run dev &
        # '';
      };
      # Runs when the workspace is (re)started
      onStart = {
        # Example: start a background task to watch and re-build backend code
        # watch-backend = "npm run watch-backend";
        # start-backend = ''
        #   cd backend
        #   npm run dev &
        # '';
      };
    };
  };
}
