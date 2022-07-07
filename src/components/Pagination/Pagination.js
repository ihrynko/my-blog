import {
  StyledContainer,
  StyledList,
  StyledItem,
  StyledButton,
  StyledIcon,
} from "./styled";

const Pagination = ({ paginationHandler, dataPerPage, count, pageNumber }) => {
  const allPages = Math.ceil(count / dataPerPage);
  const allPagesCount = [...Array(allPages).keys()];

  const onPaginate = (pageNumberSetter) => {
    paginationHandler(pageNumberSetter);
  };

  return (
    <StyledContainer>
      <StyledButton
        disabled={1 === pageNumber}
        onClick={() => {
          onPaginate(pageNumber - 1);
        }}
      >
        <StyledIcon
          xmlns="http://www.w3.org/2000/svg"
          class="btn--icon"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="2"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M15 19l-7-7 7-7"
          />
        </StyledIcon>
      </StyledButton>
      <StyledList>
        {allPagesCount.map((number, index) => (
          <StyledItem
            key={index}
            className={number + 1 === pageNumber ? "selected" : ""}
            onClick={() => {
              onPaginate(number + 1);
            }}
          >
            {number + 1}
          </StyledItem>
        ))}
      </StyledList>

      <StyledButton
        disabled={allPagesCount.length === pageNumber}
        onClick={() => {
          onPaginate(pageNumber + 1);
        }}
      >
        <StyledIcon
          xmlns="http://www.w3.org/2000/svg"
          class="btn--icon"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="2"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M9 5l7 7-7 7"
          />
        </StyledIcon>
      </StyledButton>
    </StyledContainer>
  );
};

export default Pagination;
