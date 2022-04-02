import java.util.*;
import java.lang.*;

public class CountOfAirplanes {
    private static int countOfAirplanes(List<Interval> airplanes) {

        List<Points> list = new ArrayList<>();
        for (Interval i : airplanes) {
            list.add(new Points(i.start, 1));
            list.add(new Points(i.end, -1));
        }

        Collections.sort(list, (Points a, Points b) -> {
            if (a.T == b.T)
                return a.V - b.V;
            return a.T - b.T;
        });

        int ans = 0;
        int count = 0;

        for (Points p : list) {
            if (p.V == 1)
                count++;
            else
                count--;

            ans = Math.max(ans, count);
        }

        return ans;
    }

    public static void main(String[] args) {

        List<Interval> airplanes = new ArrayList<Interval>();
        airplanes.add(new Interval(1, 10));
        airplanes.add(new Interval(2, 3));
        airplanes.add(new Interval(5, 8));
        airplanes.add(new Interval(4, 7));

        System.out.println(airplanes);
        System.out.println(countOfAirplanes(airplanes));
    }
}