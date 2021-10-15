//https://leetcode.com/problems/design-in-memory-file-system/discuss/1288611/C-Trie-Approach

// We will use Trie data structure to solve this
public enum FileType
{
    File,
    Directory
}

public class FileSystemNode
{
    public string Contents;
    public IDictionary<string, FileSystemNode> Children;
    public FileType Type;

    public FileSystemNode(FileType type)
    {
        Children = new SortedDictionary<string, FileSystemNode>();
        this.Type = type;
        Contents = string.Empty;
    }
}

public class FileSystem
{

    private FileSystemNode root;

    public FileSystem()
    {
        root = new FileSystemNode(FileType.Directory);
    }

    public IList<string> Ls(string path)
    {
        var dirs = path.Split("/", StringSplitOptions.RemoveEmptyEntries);
        var node = root;
        var name = string.Empty;
        foreach (var dir in dirs)
        {
            if (!node.Children.ContainsKey(dir))
            {
                node.Children.Add(dir, new FileSystemNode(FileType.Directory));
            }

            name = dir;
            node = node.Children[dir];
        }

        if (node.Type == FileType.Directory)
        {
            return node.Children.Keys.ToList();
        }

        return new List<string>() { name };
    }

    public void Mkdir(string path)
    {
        var dirs = path.Split("/", StringSplitOptions.RemoveEmptyEntries);
        var node = root;
        foreach (var dir in dirs)
        {
            if (!node.Children.ContainsKey(dir))
            {
                node.Children.Add(dir, new FileSystemNode(FileType.Directory));
            }

            node = node.Children[dir];
        }
    }

    public void AddContentToFile(string filePath, string content)
    {

        var dirs = filePath.Split("/", StringSplitOptions.RemoveEmptyEntries);
        var node = root;
        for (var i = 0; i < dirs.Length - 1; i++)
        {
            var dir = dirs[i];
            if (!node.Children.ContainsKey(dir))
            {
                throw new Exception();
            }

            node = node.Children[dir];
        }

        if (!node.Children.ContainsKey(dirs[dirs.Length - 1]))
        {
            node.Children.Add(dirs[dirs.Length - 1], new FileSystemNode(FileType.File));
        }

        node = node.Children[dirs[dirs.Length - 1]];
        node.Contents += content;
    }

    public string ReadContentFromFile(string filePath)
    {
        var dirs = filePath.Split("/", StringSplitOptions.RemoveEmptyEntries);
        var node = root;
        foreach (var dir in dirs)
        {
            if (!node.Children.ContainsKey(dir))
            {
                throw new Exception();
            }

            node = node.Children[dir];
        }

        return node.Contents;
    }
}

/**
 * Your FileSystem object will be instantiated and called as such:
 * FileSystem obj = new FileSystem();
 * IList<string> param_1 = obj.Ls(path);
 * obj.Mkdir(path);
 * obj.AddContentToFile(filePath,content);
 * string param_4 = obj.ReadContentFromFile(filePath);
 */