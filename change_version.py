import os


def get_project_version():
    with open("package.json", "r") as f:
        content = f.read()
        return content.split('"version": ')[1].split(",")[0].replace('"', "").strip()


def check_is_valid(new_version, current_version):
    if new_version == current_version:
        print("First, add the new changes to the CHANGELOG.md file")
        exit(1)
    major, minor, patch = new_version.split(".")
    if len(major) == 0 or len(minor) == 0 or len(patch) == 0:
        print("Version must be in the format of x.x.x")
        exit(1)


def change_package_json_version(current_version, new_version):
    files = ["package.json", "app.json"]
    for file in files:
        with open(file, "r") as f:
            content = f.read()
            content = content.replace(
                f'"version": "{current_version}"', f'"version": "{new_version}"'
            )
            with open(file, "w") as f:
                f.write(content)


def get_last_changelog_changes():
    with open("CHANGELOG.md", "r") as f:
        content = f.read()
        last_change = content.split("## ")[1].split("\n")
        version = last_change.pop(0).split("(")[0].strip()
        format_changes = [lc for lc in last_change if len(lc.strip()) > 0]
        changes = "\n".join(format_changes).strip()
        return version, changes


def create_whats_new_file(changes):
    folder = "distribution"
    if not os.path.exists(folder):
        os.makedirs(folder)
    languages = ["en-US", "es-CO"]
    for language in languages:
        with open(f"{folder}/whatsnew-{language}", "w") as f:
            f.write(changes)
            f.write("\n")


current_version = get_project_version()

(new_version, changes) = get_last_changelog_changes()

check_is_valid(new_version, current_version)

change_package_json_version(current_version, new_version)
create_whats_new_file(changes)

os.system("yarn")
os.system("git add .")

message = f"""
Project version changed to {new_version}
Now you can commit the changes and push to the remote repository

    git commit -m 'Prepare to release v{new_version}'

Do not forget to translate the distribution/whatsnew-* files
"""

print(message)
