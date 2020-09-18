import RoutesMap from "./RoutesMap"

test("correct routes are exported",  () => {
    expect(RoutesMap.map(({path, title}) => (
        `${title}: ${path}`
    ))).toMatchSnapshot()
})
