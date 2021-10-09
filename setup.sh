for dir in static/works/*/
do
  dir=${dir%*/}
  echo "${dir}"
  newdir=${dir##*/}
  mkdir src/works/${newdir}
  cp ${dir}/index.html src/works/${newdir}/index.html
done
