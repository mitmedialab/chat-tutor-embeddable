# list all remote branches
response=( $(git ls-remote --heads) )

# isolate branch names
branches=()
for r in ${response[@]}; do
    if [[ $r = refs/heads/* ]]
    then
        # remove prefix to isolate 
        branches+=( "${r#"refs/heads/"}" )
    fi
done

# Configure git so committs are allowed:

git config --global user.name 'Github Action (authored by pmalacho-mit)'
git config --global user.email 'pmalacho-mit@users.noreply.github.com'

# get all directories
directories=( $(ls -d -- */) )

# loop over directories and delete ones that don't have a corresponding remote branch
for dir in ${directories[@]}; do
    match=false
    for branch in ${branches[@]}; do
        if [[ $dir = "$branch/" ]]
        then
            match=true
            break
        fi
    done

    if [[ "$match" = false ]]
    then 
        git rm -rf $dir || echo "unable to delete stale deployed folder: $dir"
        git commit -m "Attempted to delete stale branch: $dir"
    fi
done