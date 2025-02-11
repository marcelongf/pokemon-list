import Button from "../../../../common/components/Button";
import usePage from "../../../../common/hooks/usePage"

export default () => {
  const { page, setPage, finalPage } = usePage();
  return (
    <div className="flex gap-2">
      <Button 
        disabled={page === 0}
        onClick={() => setPage(page - 1)}
      >Previous</Button>
      <Button 
        disabled={finalPage}
        onClick={() => setPage(page + 1)}
      >Next</Button>
    </div>
  )
}