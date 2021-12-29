{ project ? import ./nix { } }:

project.pkgs.mkShell {
  buildInputs = builtins.attrValues project.devTools;
  shellHook = ''
    ${project.pre-commit-check.shellHook}
  '';
}
