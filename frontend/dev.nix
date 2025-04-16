{
  pkgs ? import <nixpkgs> {}
}:{
  # Required packages for development
    packages  = [
      pkgs.nodejs_20
      pkgs.nodePackages.npm
      pkgs.git
    ];

  # Previews: run your frontend and open a browser tab automatically
  idx.previews = {
    enable = true;

    previews = {
      web = {
        command = [
          "npm"
          "run"
          "dev"
          "--"
          "--port"
          "$PORT"
          "--host"
          "0.0.0.0"
        ];
        manager = "web";
        # cwd = "app/client"; # Optional if you're not in monorepo
      };
    };
  };

  # Optional message when environment is ready
  idx.shell.postCreate = ''
    echo "🚀 Ready to develop your React/Vite app!"
  '';
}
